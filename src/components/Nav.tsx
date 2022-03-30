import {
  Stack,
  IStackTokens,
  IStackItemStyles,
} from "@fluentui/react";
import { Login } from "@microsoft/mgt-react";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { IIconProps } from "@fluentui/react/lib/Icon";
import "./Nav.css";

const filterIcon: IIconProps = { iconName: "Search" };

const horizontalGapStackTokens: IStackTokens = {
    childrenGap: 20,
  
  };
  
  const stackItemStyles: IStackItemStyles = {
    root: {
      alignItems: 'center',
      display: 'flex',
      height: 50,
      justifyContent: 'center',
    },
  };

function Nav() {
  return (
    <Stack
      horizontal
      wrap
      horizontalAlign="space-evenly"
      verticalAlign="center"
      tokens={horizontalGapStackTokens}
    >
      <Stack.Item align="start">
        <a href="https://www.react-365.com/" target="_blank" id="LogoLink">
          <img
            src="https://react-365.com/assets/icon/logo.jpg"
            id="logo"
            alt="Logo"
            className="logo"
          />
        </a>
      </Stack.Item>
      <Stack.Item align="center" grow={2} styles={stackItemStyles}>
        <div className="search-box">
          <SearchBox
            placeholder="Search"            
            underlined={false}
            iconProps={filterIcon}
            onSearch={(newValue) => console.log("value is " + newValue)}
          />
        </div>
      </Stack.Item>
      <Stack.Item align="end" styles={stackItemStyles}>
        <Login />
      </Stack.Item>
    </Stack>
  );
}

export default Nav;
