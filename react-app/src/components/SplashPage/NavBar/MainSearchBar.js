import React,{ useState }from "react";
import "./MainSearchBar.css";
import { NavLink, useHistory } from "react-router-dom";
import { GoSearch as SearchIcon } from "react-icons/go";
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates';
import { enGB } from 'date-fns/locale';

function MainSearchBar({dark}) {
    const history = useHistory();

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [num_guests, setNumGuests] = useState(1);
    const [focus, setFocus] = useState(START_DATE);

    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE);
    };

    const handleClick = () => {
        history.push("/search/all");
    }

    const resetValues = () => {
        setStartDate();
        setEndDate();
        setNumGuests(1);
    };

    return (
        <div className={`navbar__search__main ${dark}`} >

                    <DateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        focus={focus}
                        onFocusChange={handleFocusChange}
                        minimumDate={new Date()}
                        minimumLength={1}
                        format='MMM dd yyyy'
                        locale={enGB}
                    >
                        {({ startDateInputProps, endDateInputProps, focus }) => (
                            <div className='date-range-mainsearch'>
                                <input
                                    className="navbar__search__input__nice_date"
                                    {...startDateInputProps}
                                    placeholder='Check in'
                                    required
                                    readonly="readonly"
                                />
                                <span className='date-range_arrow' />
                                <input
                                    className="navbar__search__input__nice_date"
                                    {...endDateInputProps}
                                    placeholder='Check out'
                                    required
                                    readonly="readonly"
                                />
                            </div>
                        )}
                    </DateRangePicker>

                {/* <input className="navbar__search__input" placeholder="check-in date"/>
                <input className="navbar__search__input" placeholder="check-out date"/> */}
                <input className="navbar__search__input" placeholder="number of guests"  readonly="readonly"/>
                <div className="search-icon-main navbar__search__input" onClick={handleClick}>
                    <SearchIcon />
                    <h4>Search</h4>
                </div>
        </div>
    )
}

export default MainSearchBar;
