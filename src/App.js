import React, { useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PöördumisedTabel from './components/PöördumisedTabel'
import './style.css'

const App = () => {

    const [formData, setFormData] = React.useState({
        kirjeldus: "",
        lahendamiseTähtaeg: new Date()
    });
    const [pöördumised, setPöördumised] = React.useState([])

    useEffect(() => {
        fetchSupportTickets();
    }, []);

    function fetchSupportTickets() {
        fetch("http://localhost:8080/api/support-tickets")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    console.log(data);
                    setPöördumised(data);
                } else {
                    console.error("Received unexpected data format:", data);
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }


    // Log the updated formData state
    // useEffect(() => {
    //     console.log(formData); 
    // }, [formData]);

    function handleSubmit(event) {
        event.preventDefault();
        
        const newPöördumine = {
            ...formData,
        };

        console.log("Data before sending:", newPöördumine);
    
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
            fetchSupportTickets();
        })
        .catch(error => {
            console.error('Error adding ticket:', error);
        });

        setFormData({
            kirjeldus: "",
            lahendamiseTähtaeg: new Date()
        })
    }

    function handleChange(name, value) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }
    
    return(
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h2>Pöördumised kasutajatoele</h2>
                <h3>Sisesta pöördumine</h3>
                <textarea 
                    className='text'
                    value={formData.kirjeldus}
                    placeholder="Kirjeldus"
                    onChange={(event) => handleChange('kirjeldus', event.target.value)}
                    name="kirjeldus"
                    rows={4}
                    cols={40}
                />
                <br />
                <label className='tahtaeg' htmlFor='date'>Tähtaeg</label>
                <DatePicker 
                    id='date'
                    label='tähtaeg'
                    selected={formData.lahendamiseTähtaeg} 
                    onChange={(date) => handleChange('lahendamiseTähtaeg', date)}
                    showTimeSelect
                    dateFormat="Pp"
                    name='lahendamiseTähtaeg'
                />
                <br />
                <button>Sisesta</button>
            </form>

            <PöördumisedTabel pöördumised={pöördumised} />

        </div>
    )
}

export default App