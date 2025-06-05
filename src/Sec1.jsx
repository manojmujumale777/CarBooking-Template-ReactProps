import React from "react";

export default function Sec1(props)
{
    let items=props.data1;
    return(
       <>
       {
        items.map((x)=>
          {
            return(
                <>
                <div className="container sec1">
                    <div className="row justify-content-center p-md-5">
                        <div className="col-12 col-md-12 col-lg-4 p-md-5 text-white sec_1">
                            <h4>{x.head1}</h4>
                            <p>{x.p1}</p>
                            <input type="text" className=" form form-control"  placeholder={x.place} />
                            <p>{x.p2}</p>
                            <input type="text" className="form form-control"  placeholder={x.place} />
                            <div className="row">
                                <div className="col-6">
                                    <p>{x.p3}</p>
                                    <input type="date" className="form form-control" />
                                </div>
                                <div className="col-6">
                                    <p>{x.p4}</p>
                                    <input className="form form-control" type="date"/>
                                </div>
                            </div>
                            <p>{x.p5}</p>
                            <input type="time" className="form form-control" />
                            <button className="p-md-2 w-50 b2 m-auto d-block mt-5 mb-3">{x.p6}</button>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 p-md-5 bg-white text-center mt-md-5 border border-info">
                            <h3 >{x.head2}</h3>
                            <div className="row text-center p-md-5">

                                <div className="col-12 col-md-4">
                                    <span className="fa-solid fa-route icon"></span>
                                    <p>{x.p7}</p>
                                </div>

                                <div className="col-12 col-md-4">
                                <span className="fa-solid fa-handshake icon"></span>
                                <p>{x.p8}</p>
                                </div>

                                <div className="col-12 col-md-4">
                                <span className="fa-solid fa-truck-ramp-box icon"></span>
                                <p>{x.p9}</p>
                                </div>
                               
                            </div>
                            <button className="m-auto d-block p-md-2 w-50 b1">{x.p10}</button>
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