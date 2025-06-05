import React from "react";

export default function Sec3(props)
{
    let items=props.data3;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 p-lg-5">
                                <img className="w-100 p-lg-5" src={x.img1} alt="" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 p-md-5 pt-3">
                               <div className="row">
                                <div className="col-12 col-lg-8 pt-lg-5 lh-lg">
                                <p>{x.p1}</p>
                                <h2>{x.head1}</h2>
                                <p>{x.p2}</p>
                                <p>{x.p3}</p>
                                <button className="p-md-2 w-50 b1">{x.b1}</button>
                                </div>
                               </div>
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