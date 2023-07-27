import Image from "next/image";

function Social() {
  return (
    <ul className="sm:flex gap-4 max-sm:hidden">
      <a
        className="transition hover:scale-105"
        href="https://www.linkedin.com/company/exo-company/mycompany/"
      >
        <Image
          src={"linkedin.svg"}
          height={20}
          width={20}
          alt="teste"
          className="object-cover pointer-events-none"
        />
      </a>
      <a
        className="hover:scale-105"
        href="https://www.facebook.com/exocompanybr/"
      >
        <Image
          src={"facebook.svg"}
          height={20}
          width={20}
          alt="teste"
          className="object-cover pointer-events-none"
        />
      </a>
      <a
        className="hover:scale-105"
        href="https://www.instagram.com/exo.company/"
      >
        <Image
          src={"instagram.svg"}
          height={20}
          width={20}
          alt="teste"
          className="object-cover pointer-events-none"
        />
      </a>
      <a
        className="hover:scale-105"
        href="https://api.whatsapp.com/send?phone=558335784917&text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.%20Poderia%20me%20ajudar%3F"
      >
        <Image
          src={"whats.svg"}
          height={20}
          width={20}
          alt="teste"
          className="object-cover pointer-events-none"
        />
      </a>
    </ul>
  );
}

export default Social;
