import React from "react";

export default function Sec8(props)
{
    let items=props.data8;
    return(
        <>
        {
            items.map((x)=>
            {
                return(
                    <>
                    <div className="container p-md-5 bg-info text-center">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <h1>{x.h1}</h1>
                                <h6>{x.p1}</h6>
                            </div>
                            
                            <div className="col-12 col-md-6 col-lg-3">
                                 <h1>{x.h2}</h1>
                                 <h6>{x.p1}</h6>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                <h1>{x.h3}</h1>
                                <h6>{x.p1}</h6>
                            </div>

                            <div className="col-12 col-md-6 col-lg-3">
                                 <h1>{x.h4}</h1>
                                 <h6>{x.p1}</h6>
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