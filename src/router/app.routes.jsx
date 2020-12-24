import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreationLanguageTypes } from "../pages/CreationLanguage/CreationLanguageTypes";
import { CreationLanguageALL } from "../pages/CreationLanguage/CreationLanguageALL";
import { CreationLanguageDetails } from "../pages/CreationLanguage/CreationLanguageDetail";
import { EventsDetail } from "../pages/Events/EventsDetail";
import { Events } from "../pages/Events/EventsALL";
import { AboutUs } from "../pages/AboutUs";
import { FolkDance } from "../pages/FolkDance/FolkDanceALL";
import { FolkMusic } from "../pages/FolkMusic/FolkMusicALL";
import { FolkDanceDetail } from "../pages/FolkDance/FolkDanceDetail";
import { FolkMusicDetail } from "../pages/FolkMusic/FolkMusicDetail";
import { HistoryDetail } from "../pages/History/HistoriesDetail";
import { History } from "../pages/History/HistoriesALL";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/events/">
        <Events />
      </Route>
      <Route path="/events/:id/">
        <EventsDetail />
      </Route>
      <Route path="/about-us/">
        <AboutUs />
      </Route>
      <Route exact path="/folk-dances/">
        <FolkDance />
      </Route>
      <Route exact path="/folk-musics/">
        <FolkMusic />
      </Route>
      <Route path="/folk-dances/:id/">
        <FolkDanceDetail />
      </Route>
      <Route path="/folk-musics/:id/">
        <FolkMusicDetail />
      </Route>

      <Route exact path="/histories/">
        <History />
      </Route>
      <Route path="/histories/:id/">
        <HistoryDetail />
      </Route>

      <Route exact path="/creation-language/:id/">
        <CreationLanguageTypes />
      </Route>

      <Route path="/type/:id/">
        <CreationLanguageALL />
      </Route>

      <Route path="/creation/:id/">
        <CreationLanguageDetails />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};
