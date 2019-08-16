import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [location, updateLocation] = useState('Seattle, WA');
    const [animal, updateAnimal] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="Location" 
                        onChange={e => updateLocation(e.target.value)}
                    />
                    <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            value={animal}
                            onChange={e => updateAnimal(e.target.value)}
                            onBlur={e => updateAnimal(e.target.value)}
                        >
                            <option />
                            {ANIMALS.map(animal => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                    </label>
                </label>
            </form>
        </div>
    )
}

export default SearchParams;