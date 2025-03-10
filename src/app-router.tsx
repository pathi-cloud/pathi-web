import { BrowserRouter, Routes, Route } from "react-router"
import AppLayout from "./app-layout"
import HomePage from "./routes/home-page"
import MicroApp from "./components/micro-app"
import ArticlesPage from "./routes/articles-page"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="application"
            element={<MicroApp path="/tasks_assets" />}
          />
          <Route path="articles" element={<ArticlesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
