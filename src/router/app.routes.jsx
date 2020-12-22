import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "../pages/Home";
import { CreationLanguageALL } from "../pages/CreationLanguageALL";
import { CreationLanguageDetails } from "../pages/CreationLanguageDetail";
import { EventsDetail } from "../pages/EventsDetail";
import { Events } from "../pages/EventsALL";
import { AboutUs } from "../pages/AboutUs";
import { FolkDance } from "../pages/FolkDanceALL";
import { FolkMusic } from "../pages/FolkMusicALL";
import { FolkDanceDetail } from "../pages/FolkDanceDetail";
import { FolkMusicDetail } from "../pages/FolkMusicDetail";
import { HistoryDetail } from "../pages/HistoriesDetail";
import { History } from "../pages/HistoriesALL";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route path="/events/:id">
        <EventsDetail />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route exact path="/folk-dances">
        <FolkDance />
      </Route>
      <Route exact path="/folk-musics">
        <FolkMusic />
      </Route>
      <Route path="/folk-dances/:id">
        <FolkDanceDetail />
      </Route>
      <Route path="/folk-musics/:id">
        <FolkMusicDetail />
      </Route>

      <Route path="/histories">
        <History />
      </Route>
      <Route path="/history/:id">
        <HistoryDetail />
      </Route>

      <Route exact path="/:name/:id">
        <CreationLanguageALL />
      </Route>

      <Route path="/:name/:id/:creation_id">
        <CreationLanguageDetails />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};
