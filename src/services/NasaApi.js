const { default: Swal } = require("sweetalert2");

async function callApi({ coordinates, year }) {
    try {
        const re = /, /
        let value = coordinates.split(re)
        let lat = value[0];
        let long = value[1];

        const response = await fetch(`${process.env.REACT_APP_API_URL}?lon=${long}&lat=${lat}&date=${year}-02-01&api_key=${process.env.REACT_APP_API_KEY}`);
        // console.log(response);

        // Check if the response is successful (status code 200)
        if (response.ok) {
            const dataFormated = await response.json();
            return { hasData: true, data: dataFormated };
        } else {
            return { hasData: false, data: [] };
        }


    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred",
        });
        return null;
    }
}

module.exports = {
    callApi
};