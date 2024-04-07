import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pöördumine from './components/Pöördumine'

const App = () => {

    const [formData, setFormData] = React.useState({
            kirjeldus: ""
    })

    const [tahtaeg, setTahtaeg] = React.useState(new Date());
    const [pöördumised, setPöördumised] = React.useState([])


    function fetchSupportTickets() {
        fetch("http://localhost:8080/api/support-tickets")
            .then((res) => res.json())
            .then((data) => setPöördumised(data || []))
            .catch((err) => {
                console.log(err.message);
            });
    }

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value,
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        const newPöördumine = {
            ...formData,
            tahtaeg: tahtaeg
        };
    
        fetch('http://localhost:8080/api/support-tickets', { 
            method: 'POST', 
            mode: 'cors', 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPöördumine)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add ticket');
            }
            return response.json();
        })
        .then(newTicket => {
            // Fetch the support tickets after successfully adding a new one
            fetchSupportTickets();
        })
        .catch(error => {
            console.error('Error adding ticket:', error);
        });
    }


    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h2>Pöördumised kasutajatoele</h2>
                <h3>Sisesta pöördumine</h3>
                <textarea 
                    value={formData.kirjeldus}
                    placeholder="Kirjeldus"
                    onChange={handleChange}
                    name="kirjeldus"
                    rows={4}
                    cols={40}
                />
                <br />
                <label htmlFor='date'>Tähtaeg</label>
                <DatePicker 
                    id='date'
                    label='tähtaeg'
                    selected={tahtaeg} 
                    onChange={(date) => setTahtaeg(date)}
                    showTimeSelect
                    dateFormat="Pp"
                />
                <button>Sisesta</button>
            </form>

            <div className='list'>
                <h3>Pöördumised</h3>
                <div className="pöördumised-container" >
                    {pöördumised.map(pöördumine => <Pöördumine
                        key={pöördumine.id}
                        kirjeldus={pöördumine.kirjeldus}
                        sis_aeg={pöördumine.sisestamiseAeg}
                        tahtaeg={pöördumine.lahendamiseTähtaeg}
                    />)}
                </div>
            </div>
        </>
    )
}

export default App