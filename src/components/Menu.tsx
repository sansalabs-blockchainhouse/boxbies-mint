import styled from "styled-components";

const MenuItem = styled.a`
  color: white;
  font-size: 25px;
  text-decoration: none;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 400px;
  width: 40vw;
  margin: 5vh auto 0 auto;
`;

const Menu = () => {
  return (
    <MenuContainer>
      <MenuItem>Open Sea</MenuItem>
      <MenuItem>Magic Eden</MenuItem>
      <MenuItem href="https://boxbies.gitbook.io/">Litepaper</MenuItem>
      <MenuItem href="https://twitter.com/boxbies">Twitter</MenuItem>
      <MenuItem href="https://discord.gg/boxbies">Discord</MenuItem>
    </MenuContainer>
  );
};

export default Menu;