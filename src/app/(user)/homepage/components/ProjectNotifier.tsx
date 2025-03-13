import { githubLogo, twitterLogo } from "@/lib/util/images";
import { githubLink, xLink } from "@/lib/util/links";
import Image from "next/image";

const headerText = "Güven Ağı Projesi";

const bodyText =
  "Güven Ağı projesi tamamen ücretsiz, açık kaynak kodlu bir web oluşumudur." +
  " Türkiye'de yaşam hakkının ve eşit yaşam standartlarının herkes için korunmasına yönelik oluşturulmuş sivil toplum kuruluşlarını birleştirmeyi amaçlayan bir sosyal sorumluluk projesidir.";

export default function ProjectNotifier() {
  return (
    <div className="bg-gray-100 rounded-xl my-2 p-4">
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl">{headerText}</h2>
          <div className="text-lg">{bodyText}</div>
        </div>
        <div className="flex flex-row gap-1 items-center flex-wrap p-2 bg-gray-50">
          <a className="inline-block" href={githubLink}>
            <Image src={githubLogo} alt="github" width={30} height={30} />
          </a>
          <a className="inline-block" href={xLink} target="_blank">
            <Image src={twitterLogo} alt="twitter" width={30} height={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
