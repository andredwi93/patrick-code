import {
  Css,
  Docker,
  Firebase,
  Git,
  Html5,
  Javascript,
  MongodbWordmark,
  MysqlWordmark,
  NextjsDark,
  Nodejs,
  PostgresqlDark,
  Python,
  ReactDark,
  ReactQueryIcon,
  Reactrouter,
  Tailwindcss,
  Typescript
} from "../components/icons/skills";

export default function Icons() {
  const data = [
    <Html5 className="w-10 h-10" />,
    <Css className="w-10 h-10" />,
    <Tailwindcss className="w-10 h-10" />,
    <Javascript className="w-10 h-10" />,
    <Typescript className="w-10 h-10" />,
    <ReactDark className="w-10 h-10" />,
    <NextjsDark className="w-10 h-10" />,
    <Reactrouter className="w-10 h-10" />,
    <ReactQueryIcon className="w-10 h-10" />,
    // <Flutter className="w-10 h-10" />,
    <Nodejs className="w-10 h-10" />,
    <Python className="w-10 h-10" />,
    // <DjangoIcon className="w-10 h-10" />,
    <MongodbWordmark className="w-10 h-10" />,
    <PostgresqlDark className="w-10 h-10" />,
    <MysqlWordmark className="w-10 h-10" />,
    <Firebase className="w-10 h-10" />,
    <Docker className="w-10 h-10" />,
    <Git className="w-10 h-10" />,
  ];
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="w-16 h-16 bg-primary-100/50 backdrop-blur-xs rounded-2xl flex items-center justify-center"
        >
          {item}
        </div>
      ))}
    </>
  );
}
