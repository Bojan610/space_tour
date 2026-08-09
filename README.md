# 🎉 Space Tour

A **frontend-only Angular application** — a fictional space-tourism site presenting travel destinations, the crew, and the technology behind the flights.

The app is fully client-side — there is no backend. All data lives in memory and is seeded on startup.

**🔗 Live demo:** [https://space-tour-71b08.web.app/](https://space-tour-71b08.web.app/)

## 🛠️ Tech Stack

| Area | Choice |
| --- | --- |
| Framework | Angular 18.2 (standalone components, no `NgModule`s) |
| Language | TypeScript 5.5 in `strict` mode, `strictTemplates` enabled |
| Routing | `@angular/router` with lazy loading, resolvers and component input binding |
| Animations | `@angular/animations` (`BrowserAnimationsModule`) |
| Styling | Plain CSS — global `styles.css` + component-scoped stylesheets |
| Testing | Karma + Jasmine (`ng test`) |
| Hosting | Firebase Hosting (SPA rewrites) |


## 🚀 Getting Started

### Prerequisites
- **Node.js** and **npm**
- **Angular CLI 18** (`npm install -g @angular/cli@18`)

### Install & Run

```bash
cd space-tour
npm install
ng serve
```

Then open http://localhost:4200/.

## 📁 Project Structure

```
space-tour/
├── public/                 # static assets, copied verbatim to the build output
│   ├── crew/               # crew portraits + responsive backgrounds
│   ├── destination/        # planet renders + background
│   ├── home/               # responsive home backgrounds
│   └── technology/         # technology imagery + background
└── src/
    ├── index.html          # <app-root>, Poppins web font, favicon
    ├── main.ts             # bootstrap + router/animation providers
    ├── styles.css          # global reset, font, radial-gradient page background
    └── app/
        ├── app.component.*         # shell: <app-header /> + <router-outlet />
        ├── app.config.ts           # base ApplicationConfig
        ├── app.routes.ts           # the whole route tree
        ├── header/                 # top navigation + mobile burger menu
        ├── homepage/               # landing page
        ├── destination/
        │   ├── planets/            # planet picker grid
        │   └── planet/             # planet detail shell
        │       ├── overview/
        │       ├── internal-structure/
        │       └── surface-geology/
        ├── crew/                   # auto-playing crew carousel
        ├── technology/             # technology switcher
        ├── not-found/              # 404 page
        ├── models/                 # Planet, CrewMember, Technology interfaces
        └── services/               # in-memory data sources
```

## 🏗️ Architecture

### Standalone components

The app uses no `NgModule` at all. Every component is declared `standalone: true` and imports exactly what its template needs (`RouterLink`, `RouterOutlet`, `NgFor`, …).

Router configuration is applied at bootstrap.

### Routing model

The route tree in [app.routes.ts](space-tour/src/app/app.routes.ts) is three levels deep.

Key points:

- **Lazy loading** — feature routes use `loadComponent: () => import(...)` so each page ships as its own chunk instead of being bundled into the initial payload.
- **Route-level providers** — `DestinationService`, `CrewService` and `TechnologyService` are registered on their routes (`providers: [...]`) rather than as `providedIn: 'root'` singletons. Each service is instantiated only when its branch of the router is entered and torn down when leaving it, which keeps the seeded data out of memory until it's actually needed.
- **Per-route titles** — `title: 'Space Tour - …'` sets the document title through the router instead of manual `Title` service calls.
- **Deep-linkable content** — a planet and its active tab are fully described by the URL (e.g. `/destination/mars/internal-structure`), so it can be bookmarked and shared.

### Data layer

There is no HTTP client and no persistence. Each service is a plain `@Injectable()` class that seeds a private array in its constructor and exposes read-only accessors:

- [DestinationService](space-tour/src/app/services/destination.service.ts) — 4 destinations (Europa, Mars, Moon, Titan), each with description, average distance, estimated travel time, internal structure and surface geology.
- [CrewService](space-tour/src/app/services/crew.service.ts) — 4 crew members with role, bio and portrait.
- [TechnologyService](space-tour/src/app/services/technology.service.ts) — 3 technology entries.

## 🧪 Testing

Unit tests run on Karma + Jasmine via `ng test`. Specs cover the homepage, crew, technology, planets and planet components ([*.spec.ts](space-tour/src/app/)).

Coverage is a mix of creation checks, DOM assertions (e.g. the rendered `h1` text) and behavioural tests.

## 📄 Notes

* The app is responsive — it works across different resolutions and devices, including a dedicated mobile navigation menu.
* The app implements no data persistence. All state is held in memory and is reset to its initial seeded state on page refresh.
* The interface language is in English.
