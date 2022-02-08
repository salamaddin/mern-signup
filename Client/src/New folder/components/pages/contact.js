import React from 'react';

function Contact() {
  return (
    <>
        <div className='="contact_info'>
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-lg'>
                        <div className='contact_info_title'>
                            Phone
                        </div>
                        <div className='contact_info_text'>
                            8159928643
                        </div>

                        <div className='contact_info_title'>
                            Email
                        </div>
                        <div className='contact_info_text'>
                            salam@gmail.com
                        </div>
                        <div className='contact_info_title'>
                            Adress
                        </div>
                        <div className='contact_info_text'>
                            kolkata
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* contact form */}
        <div className='contact_form'>
            <div className='container'>
                <div row>
                    <div className='contact_form'>
                        <div className='contact_form_title'>
                            <form id='contact_form'>
                                <div className='contact_form_name'>
                                    <input type='text' 
                                    id='contact_form_name'
                                    className='contact_form_name'
                                    placeholder='name'
                                    required = 'true' />

                                    <input type='email' 
                                    id='contact_form_email'
                                    className='contact_form_name'
                                    placeholder='email'
                                    required = 'true' />

                                    <input type='number' 
                                    id='contact_form_phone'
                                    className='contact_form_name'
                                    placeholder='phone'
                                    required = 'true' />
                                </div>
                                <div>
                                    <textarea className='text_field' id='' placeholder='message'>

                                    </textarea>
                                </div>
                                <div className='contact_form_button'>
                                    <button typr="submit" className='button'>send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Contact;
