import React, { useState } from 'react';

function MealForm() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
        alert('You have successfully submitted the form!');

    }

    return (
        <div className="wrapper">
            <h1>Meal Preferences</h1>
            {submitting &&
                <div>Submitting form...</div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
       </div>
    )
}

export default MealForm;
