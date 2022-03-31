import { FC } from "react";
import { appConfig } from "@utils";
export const Footer: FC = () => {
  return (
    <footer className="fixed bottom-4 w-full h-24 flex justify-center items-center">
      <p className="font-PTSans text-gray-300 text-sm">
        Crated by {appConfig.name}{" "}
        <a
          href={appConfig.github}
          rel="noreferrer"
          target="_blank"
          className="text-base font-bold hover:text-primary-dark transition-all duration-200 text-gray-300"
        >
          @github
        </a>
      </p>
    </footer>
  );
};
