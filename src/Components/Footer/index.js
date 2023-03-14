import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-32 bg-gray">
      <div className="container mx-auto h-full flex items-center justify-start gap-11 text-light text-xs">
        <Link to="/" className="hover:opacity-80">
          会員登録
        </Link>
        <Link to="/" className="hover:opacity-80">
          運営会社
        </Link>
        <Link to="/" className="hover:opacity-80">
          利用規約
        </Link>
        <Link to="/" className="hover:opacity-80">
          個人情報の取扱について
        </Link>
        <Link to="/" className="hover:opacity-80">
          特定商取引法に基づく表記
        </Link>
        <Link to="/" className="hover:opacity-80">
          お問い合わせ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
