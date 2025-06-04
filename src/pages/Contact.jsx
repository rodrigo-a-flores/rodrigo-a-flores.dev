import { FaFilePdf, FaGithub, FaLinkedin, FaRegEnvelope, FaRegPaperPlane } from "react-icons/fa";

function Contact() {
    return (
        <section className="contact">
            <h2>Contáctame</h2>            
            <div className="contenedor">
                <div className="enlaces">
                    <ul>
                        <div>
                            <label htmlFor="correo"><FaRegEnvelope /> Correo</label>
                            <li id="correo"><a>rodrigo.flores.280200@gmail.com</a></li>
                        </div>
                        <div>
                            <label htmlFor="linkedin"><FaLinkedin /> Linkedin</label>
                            <li id="linkedin"><a href="https://www.linkedin.com/in/rodrigo-atuncar-flores" target="_blank">https://www.linkedin.com/in/rodrigo-atuncar-flores</a></li>
                        </div>
                        <div>
                            <label htmlFor="github"><FaGithub /> Github</label>
                            <li id="github"><a href="https://github.com/rodrigo-a-flores" target="_blank">https://github.com/rodrigo-a-flores</a></li>
                        </div>
                        <div>
                            <label htmlFor="micv"><FaFilePdf /> Curriculum Vitae</label>
                            <li id="micv"><a href="/CV-Rodrigo-A-Flores.pdf" download>Descargar CV</a></li>
                        </div>
                    </ul>
                </div>
                <div className="formulario">
                    {/* terminar envio de correos */}
                    <form action="">
                        <input type="text" placeholder="Nombre Completo" />
                        <input type="email" placeholder="Correo*" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje*"></textarea>
                        <button type="submit"><FaRegPaperPlane /> Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
