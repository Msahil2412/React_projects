import { React } from "react";

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert(data.error);
        }
    } catch (err) {
        alert('Error submitting form');
    }
};


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const [formData, setFormData] = useState({ name: '', email: '' });


export function Forms(){
    return (

            <form action={handleSubmit}>
            <input type="text" name="uname" id="uname" placeholder="Enter your Name:...." value={formData.name} onChange={handleChange} /><br /><br />
            <input type="text" name="umail" id="umail" placeholder="Enter your Email:...." value={formData.email} onChange={handleChange}/><br /><br />
            {/* <input type="text" name="uphone" id="uphone" placeholder="Enter your Phone No.:...." /><br /><br /> */}
                        <button>Submit</button>
            </form>
    );
}

export default Forms;



    
    

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input
//                     type="text"
//                     name="name"
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input
//                     type="email"
//                     name="email"
//                     
//                 />
//             </label>
//             <br />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default FFF;