import { useRouteError } from 'react-router-dom';

export default function AboutUs() {
  // const error: {
  //   statusText: string,
  //   message: string
  // } = useRouteError();
  // console.error(error);
  return (
    <div id="error-page">
      <h1>About Us</h1>
      <p>AboutUs AboutUs AboutUs</p>
      <p>{/* <i>{error.statusText || error.message}</i> */}</p>
    </div>
  );
}
