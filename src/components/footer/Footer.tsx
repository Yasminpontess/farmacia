import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="w-screen bg-blue-400 text-white py-4  bottom-0 left-0">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-6">
        <p className="text-xl font-bold">
          Farmacias Bem Estar | Yasmin Pontes | Copyright: {data}
        </p>
        <p className="text-lg">Acesse nossas redes sociais</p>
        <div className="flex gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/yasmin-da-silva-pontes-011201165/"
            target="_blank"
          >
            <LinkedinLogo size={32} weight="bold" />
          </a>
          <a href="https://www.instagram.com/yasmin.ps_/" target="_blank">
            <InstagramLogo size={32} weight="bold" />
          </a>
          <a
            href="https://www.facebook.com/yasmin.dasilvapontes"
            target="_blank"
          >
            <FacebookLogo size={32} weight="bold" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
