import { HashRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants";
import AboutUsPage from "./pages/AboutUs.page";
import CommonPage from "./pages/Common.page";
import ContactUsPage from "./pages/ContactUs.page";
import DownloadsPage from "./pages/Downloads.page";
import GalleryPage from "./pages/Gallery.page";
import GoKartPage from "./pages/GoKart.page";
import EBikePage from "./pages/EBike.page";
import HomePage from "./pages/Home.page";
import NotFoundPage from "./pages/NotFound.page";
import RegistrationPage from "./pages/RegisterNow.page";
import SeasonPage from "./pages/Season.page";
import TrainingPage from "./pages/Training.page";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.home} element={<CommonPage />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.aboutUs} element={<AboutUsPage />} />
          <Route path={ROUTES.contactUs} element={<ContactUsPage />} />
          <Route path={ROUTES.gallery} element={<GalleryPage />} />
          <Route path={ROUTES.goKart} element={<GoKartPage />} />
          <Route path={ROUTES.season} element={<SeasonPage />} />
          <Route path={ROUTES.downloads} element={<DownloadsPage />} />
          <Route path={ROUTES.eBike} element={<EBikePage />} />
          {/* <Route path={ROUTES.quadBikeATV} element={<QuadBikePage />} /> */}
          <Route path={ROUTES.registration} element={<RegistrationPage />} />
          <Route path={ROUTES.training} element={<TrainingPage />} />
          <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
