import React from 'react';
import { Button, Table } from 'react-bootstrap';
import "../components/Invoice.css"

const InvoiceList = () => {


    return (
        <div className="container custom-container mt-5">
            <div className='position-relative'>
                <h3 className="text-center fs_8 ff_montserrat fw-semibold mb-0 pt-2 pb_2">Invoice List</h3>
                <img src="https://i.ibb.co/K5y6Jf2/Multiply.png" alt="Multiply" className='position-absolute end-0 top-50 translate-middle-y cross_icon' />
            </div>
            <Table striped bordered hover responsive className="text-center">
                <thead className="bg-light" border="0">
                    <tr>
                        <th >S.no</th>
                        <th>Invoice no.</th>
                        <th className='text-nowrap'>No. of box</th>
                        <th>Eway no.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td className='d-flex align-items-center justify-content-center'>
                            BSINDDN129
                            <Button variant="link" className="p-0 mx-2">
                                <img src="https://i.ibb.co/ncRNwLT/Downloading-Updates-1.png" alt="Downloading-Updates" className='download_icon' />
                            </Button>
                        </td>
                        <td>
                            12
                        </td>
                        <td className='gap-2 justify-content-end'>1204
                            <Button className='generate_btn mb-0 d-inline-block'>
                                Generate
                            </Button>
                            <Button className='print_btn mb-0 text-nowrap d-inline-block'>
                                Print Invoice
                            </Button>
                        </td>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='d-flex align-items-center justify-content-center'>
                            BSINDDN129
                            <Button variant="link" className="p-0 mx-2">
                                <img src="https://i.ibb.co/ncRNwLT/Downloading-Updates-1.png" alt="Downloading-Updates" className='download_icon' />
                            </Button>
                        </td>
                        <td>
                            12
                        </td>
                        <td className='gap-2 justify-content-end'>1204
                            <Button className='generate_btn mb-0 d-inline-block'>
                                Generate
                            </Button>
                            <Button className='print_btn mb-0 text-nowrap d-inline-block'>
                                Print Invoice
                            </Button>
                        </td>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='d-flex align-items-center justify-content-center'>
                            BSINDDN129
                            <Button variant="link" className="p-0 mx-2">
                                <img src="https://i.ibb.co/ncRNwLT/Downloading-Updates-1.png" alt="Downloading-Updates" className='download_icon' />
                            </Button>
                        </td>
                        <td>
                            12
                        </td>
                        <td className='gap-2 justify-content-end'>1204
                            <Button className='generate_btn mb-0 d-inline-block'>
                                Generate
                            </Button>
                            <Button className='print_btn mb-0 text-nowrap d-inline-block'>
                                Print Invoice
                            </Button>
                        </td>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='d-flex align-items-center justify-content-center'>
                            BSINDDN129
                            <Button variant="link" className="p-0 mx-2">
                                <img src="https://i.ibb.co/ncRNwLT/Downloading-Updates-1.png" alt="Downloading-Updates" className='download_icon' />
                            </Button>
                        </td>
                        <td>
                            12
                        </td>
                        <td className='gap-2 justify-content-end'>1204
                            <Button className='generate_btn mb-0 d-inline-block'>
                                Generate
                            </Button>
                            <Button className='print_btn mb-0 text-nowrap d-inline-block'>
                                Print Invoice
                            </Button>
                        </td>

                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default InvoiceList;
