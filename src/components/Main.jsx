import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Input } from './Input'
import { motion } from 'framer-motion'

const DATES =
  [
    '2013-01-01',
    '2014-01-01',
    '2015-01-01',
    '2016-01-01',
    '2017-01-01',
    '2018-01-01',
    '2019-01-01',
    '2020-01-01',
    '2021-01-01'
  ]
const API_KEY = '9JtUT2M6c45gpQzFRzlxbZuEWu1dFH0pfPMbQPAY'
const errorImage = '/404.png'

const API_URL = ({ lat, long, date, API_KEY }) => `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=${date}&api_key=${API_KEY}`
const INITIAL_STATE = Array(DATES.length).fill({ date: null, url: null, loading: true })

const Main = () => {
  const [datos, setDatos] = React.useState(INITIAL_STATE)
  const search = useRef({ lat: 0, long: 0 })
  const firstLoad = useRef(true)

  const handleOnload = ({ index }) => {
    setDatos(prev => {
      const newDatos = [...prev]
      newDatos[index].loading = false
      return newDatos
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { latitud, longitud } = e.target.elements

    getData({ latitud: latitud.value, longitud: longitud.value })
    // getData()
  }

  async function getData ({ latitud, longitud }) {
    const errors = []

    if (isNaN(latitud) || isNaN(longitud)) {
      errors.push('Please enter a valid latitude and longitude')
    }

    if (search.current.lat === latitud && search.current.long === longitud) {
      errors.push('Please enter a different latitude or longitude')
    }

    if (errors.length) {
      toast.error(errors.join('\n'), {
        position: 'top-right',
        style: {
          color: '#fff',
          backgroundColor: '#0f172a'
        }
      })
      return
    }

    search.current.lat = latitud
    search.current.long = longitud

    setDatos(INITIAL_STATE)

    DATES.map(
      (date, index) => fetch(
        API_URL({ lat: latitud, long: longitud, date, API_KEY }))
        .then(res => res.json()
          .then(data => {
            setDatos(prev => {
              const newDato = {
                date,
                url: data.url,
                loading: true
              }
              const newSatate = [...prev]
              newSatate[index] = newDato
              return newSatate
            }
            )
          }))
    )
    firstLoad.current = false
  }

  return (
    <>
      <Toaster />
      <main className=' flex  flex-col sm:flex-row gap-16 w-full px-24 mt-11 justify-center  items-center'>
        <h1 className='  font-bold text-6xl sm:text-7xl '>
          EARTH
          <br />
          EXPLORER
        </h1>
        <form className=' flex flex-col justify-center w-72 sm:w-96  gap-3 ' onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row justify-center gap-3'>

            <Input
              name='latitud'
              placeholder='Latitud'

            />
            <Input
              name='longitud'
              placeholder='Longitud'
            />

          </div>
          <button className=' w-full bg-slateOpacity hover:bg-slate-700/90 transition-colors h-12 rounded-lg  border border-slate-800'>
            Go!
          </button>
        </form>
      </main>

      <div className=' relative grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 max-w-2xl gap-12 mt-16 pb-16'>

        {
          !firstLoad.current && (

            datos.map((item, index) => {
              return (

                <motion.div
                  key={index}
                  className='  relative bg-slate-900 p-1 rounded-lg overflow-hidden w-72  sm:w-52 h-72  sm:h-52'
                >

                  {item?.date
                    ? <motion.p className=' absolute bottom-0 right-0 p-2 bg-slate-900 rounded-tl-lg'>{item.date}</motion.p>
                    : null}

                  {item?.url === undefined
                    ? <motion.img
                        src={errorImage}
                        className=' h-full w-full object-cover  rounded-lg' alt='Error Image'
                      />
                    : <motion.img
                        src={item.url}
                        alt='Earth Image'
                        className=' h-full w-full object-cover  rounded-lg'
                        onLoad={() => handleOnload({ index })}
                      />}

                  {
                    (item.loading === true && item.url !== undefined) &&
                      <motion.div className='skeleton absolute top-0 right-0 h-full w-full' />
                  }

                </motion.div>
              )
            })
          )

        }

      </div>

    </>
  )
}

export default Main
