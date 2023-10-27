import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.Dark};
  color: ${(props) => props.theme.White};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  padding: 5px;
  margin-right: 10px;
  background-color: transparent;
  color: ${(props) => props.theme.White};
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.White};
`;

export const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.Dark};
  color: ${(props) => props.theme.White};
  border: 1px solid ${(props) => props.theme.Grayish};
  border-radius: 4px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.Grayish};
  }
  `;