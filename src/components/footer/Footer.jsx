
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">شرایط استفاده</li>
                    <li className="menuItem">سیاست حفظ حریم خصوصی</li>
                    <li className="menuItem">دربازه ما</li>
                    <li className="menuItem">وب لاک</li>
                    <li className="menuItem">سوالات و پاسخ</li>
                </ul>
                <div className="infoText">
                دنیای سرگرمی در نوک انگشتان شما: سایت فیلم و سریال

                در دنیای پرشتاب امروز، سرگرمی و تفریح نقشی حیاتی در زندگی انسان ایفا می‌کنند. تماشای فیلم و سریال یکی از محبوب‌ترین روش‌های گذران اوقات فراغت است که به ما امکان می‌دهد از دنیای واقعی فاصله بگیریم و به سفری خیالی در زمان و مکان بپردازیم.

                سایت‌های فیلم و سریال با ارائه طیف گسترده‌ای از فیلم‌ها و سریال‌ها در ژانرهای مختلف، به پناهگاهی برای علاقه‌مندان به این حوزه تبدیل شده‌اند. در این سایت‌ها، می‌توانید به راحتی به جدیدترین فیلم‌ها و سریال‌ها دسترسی داشته باشید، نقد و بررسی آن‌ها را مطالعه کنید، نظرات سایر کاربران را مشاهده نمایید و بر اساس سلیقه خود، بهترین گزینه را برای تماشا انتخاب کنید.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
