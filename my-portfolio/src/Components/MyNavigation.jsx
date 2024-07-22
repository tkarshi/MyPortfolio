import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function MyNavigation() {
  const navItemRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
    blog: useRef(null),
    skills: useRef(null),
  };

  const location = useLocation();

  const [path, setPath] = useState[location.pathname];

  const [navItemLeft, setNavItemLeft] = useState(0);

  const [navItemWidth, setNavItemWidth] = useState(0);

  const [navItemTop, setNavItemTop] = useState(0);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const getCurrentRef = () => {
    switch (path) {
      case "/":
        return navItemRefs.home;
      case "/about":
        return navItemRefs.about;
      case "/projects":
        return navItemRefs.projects;
      case "/contact":
        return navItemRefs.contact;
      case "/blog":
        return navItemRefs.blog;
      case "/skills":
        return navItemRefs.skills;
      default:
        return navItemRefs.home;
    }
  };

  useEffect(() => {
    const { current } = getCurrentRef();
    if (current) {
      const { left, width, top } = current.getBoundingClientReact();
      setNavItemLeft(left);
      setNavItemWidth(width);
      setNavItemTop(top);
    }
  }, [path]);

  const handleHover = (refName) => {
    const { left, width, top } =
      navItemRefs[refName].current.getBoundingClientReact();
  };

  const handleMouseLeave = (refName) => {
    const { left, width, top } =
      getCurrentRef().current.getBoundingClientReact();
  };

  return <MyNavigationStyle>Home</MyNavigationStyle>;
}

const MyNavigationStyle = styled.div``;
export default MyNavigation;
