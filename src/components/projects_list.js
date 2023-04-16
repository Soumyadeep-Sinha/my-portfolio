import project1 from '../image/project1.png'
import project2 from '../image/project2.png'
import project3 from '../image/project3.png'


const projectList = [
    {
        id : 1,
        name: "web3 blockchain app",
        image: project1,
        link: "https://github.com/Soumyadeep-Sinha/WEB-3.0-BLOCKCHAIN-APP",
        about: "This is a web3.0 ethereum transaction simulator that has additional features like a crypto mining simulator, live prices, check balance and more.(Click on image to view source code). Made with React, Solidity, web3, ethers."
    },

    {
        id : 2,
        name: "Hospital Management app",
        image: project3,
        link: "https://github.com/Soumyadeep-Sinha/E-Hospital",
        about: "This is a complete hospital management system with full user and admin CRUD controls and a special chatbox, It uses NodeJS, ExpressJS, MongoDB, mongoose, socket.io, etc.(Click on image to view source code)"
    },

    {
        id : 3,
        name: "Live Code Playground",
        image: project2,
        link: "https://github.com/Soumyadeep-Sinha/Code-playground-HTML-CSS-JS",
        about: "This is a code playground for html, css and javascript, it comes with a theme changer.It is based on HTML, CSS, and Javascript (Click on image to view source code)."
    },
]

export default projectList;