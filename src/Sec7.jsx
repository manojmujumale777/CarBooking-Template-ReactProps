import React from "react";

export default function Sec7(props)
{
    let items=props.data7;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container p-md-5">
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-4 p-lg-5 ">
                                <figure>
                                    <img className="w-100" src={x.img1} alt="" />
                                    <figcaption>
                                        <div className="row p-lg-3">
                                            <div className="col-6"><span>{x.date}</span></div>
                                            <div className="col-6"><span>{x.p1}</span></div>
                                        </div>

                                        <p>{x.p2}</p>
                                        <button className="p-md-2 w-50 b2 m-auto d-block">{x.b1}</button>

                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-4 col-lg-4  p-lg-5">
                                <figure>
                                  <img className="w-100" src={x.img2} alt="" />
                                    <figcaption>
                                        <div className="row p-lg-3">
                                            <div className="col-6"><span>{x.date}</span></div>
                                            <div className="col-6"><span>{x.p1}</span></div>
                                        </div>

                                        <p>{x.p2}</p>
                                        <button className="p-md-2 w-50 b2 m-auto d-block">{x.b1}</button>

                                    </figcaption>
                                </figure>
                            </div>

                            <div className="col-12 col-md-4 col-lg-4 p-lg-5">
                                <figure>
                                  <img className="w-100" src={x.img3} alt="" />
                                    <figcaption>
                                        <div className="row p-lg-3">
                                            <div className="col-6"><span>{x.date}</span></div>
                                            <div className="col-6"><span>{x.p1}</span></div>
                                        </div>

                                        <p>{x.p2}</p>
                                        <button className="p-md-2 w-50 b2 m-auto d-block">{x.b1}</button>

                                    </figcaption>
                                </figure>
                            </div>
                            
                        </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}