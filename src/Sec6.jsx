import React from "react";
 export default function Sec6(props)
 {
    let items=props.data6;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container text-center p-md-3 mt-md-5">
                        <div className="row">

                            <div className="col-12 col-md-4 col-lg-4">
                                <figure>
                                    <img className="w-25 rounded-circle" src={x.img1} alt="" />
                                    <figcaption className="p-md-2 p-lg-5">
                                        <h6>{x.fhead}</h6>
                                        <p>{x.fcap}</p>
                                        <h5>{x.h1}</h5>
                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-4 col-lg-4">
                                <figure>
                                      <img className="w-25 rounded-circle" src={x.img2} alt="" />
                                    <figcaption className="p-md-2 p-lg-5">
                                        <h6>{x.fhead}</h6>
                                        <p>{x.fcap}</p>
                                        <h6>{x.h2}</h6>

                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-4 col-lg-4">
                                <figure>
                                    <img className="w-25 rounded-circle" src={x.img3} alt="" />
                                    <figcaption className="p-md-2 p-lg-5">
                                        <h6>{x.fhead}</h6>
                                        <p>{x.fcap}</p>
                                        <h6>{x.h3}</h6>

                                    </figcaption>
                                </figure>
                            </div>

                           
                        </div>
                    </div>
                    </>
                )
            }
            )
        }
        </>

    )
 }