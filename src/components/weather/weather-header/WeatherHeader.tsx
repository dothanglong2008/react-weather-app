import SidebarContainer from "../../ui/containers/sidebar-container/SidebarContainer";
import Title from "../../ui/elements/title/Title";
import SearchForm from "../search/SearchForm";

function WeatherHeader() {
  return (
    <>
      <Title />
      <SidebarContainer>
        <SearchForm />
      </SidebarContainer>
    </>
  );
}

export default WeatherHeader;
