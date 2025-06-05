import React from "react";
export default function Foot(props)
{
    let items=props.dataf;
    return(
        <>
        {
        items.map((x)=>
        {
            return(
                <>
                <div className="container-fluid bg-black text-white pt-md-5 mt-md-5 pb-md-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="pb-3">{x.head1}</h5>
                            <p>{x.p1}</p>
                            <div>
                                <span className="fa-brands fa-twitter m-2 fs-5 border rounded-circle p-3"></span>
                                <span className="fa-brands fa-facebook m-2 fs-5 border rounded-circle p-3"></span>
                                <span className="fa-brands fa-instagram m-2 fs-5 border rounded-circle p-3"></span>
                          
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                             <h5 className="pb-3">{x.head2}</h5>
                             <p>{x.p21}</p>
                             <p>{x.p22}</p>
                             <p>{x.p23}</p>
                             <p>{x.p24}</p>
                             <p>{x.p25}</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="pb-3">{x.head3}</h5>
                            <p>{x.p31}</p>
                            <p>{x.p32}</p>
                            <p>{x.p33}</p>
                            <p>{x.p34}</p>
                            <p>{x.p35}</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                            <h5 className="pb-3">{x.head4}</h5>
                            <p>{x.p41}</p>
                            <p>{x.p42}</p>
                            <p>{x.p43}</p>
                        </div>

                        <div className="text-center mt-5 text-info"><b>{x.copy}</b></div>
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