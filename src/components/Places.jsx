import React from 'react';

export const Places = ({space, handleChoosePlace}) =>{
    return (
        <div className="modal-places">
            {space.map((item, i) => {
                return (
                    <div key={i} className="modal-place-container">
                        <div className="modal-place-line">Ряд:{i+1}</div>
                        {
                            item.map((elem, j) => {
                                return (
                                    <div key={`${i}-${j}`} className={`place${elem.booked ? "booked" : ""}`} onClick={() => handleChoosePlace(elem)}>
                                        <span>{elem.place}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    );
};