import s from './Identify.module.css'

const Identify = () => {
    return (
        <div className={s.main}>
            <div className={s.card}>
                <div className={s.card_body}>
                    <i className={s.pen_edit}></i>
                    <table>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td>ImDezCode</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>:</td>
                            <td>sysmaaster@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>:</td>
                            <td>Bali, Indonesia</td>
                        </tr>
                        <tr>
                            <td>Hobbies</td>
                            <td>:</td>
                            <td>Diving, Reading Book, Sleep</td>
                        </tr>
                        <tr>
                            <td>Job</td>
                            <td>:</td>
                            <td>Web Developer</td>
                        </tr>
                        <tr>
                            <td>Skill</td>
                            <td>:</td>
                            <td>PHP, HTML, CSS, Java</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
};
export default Identify