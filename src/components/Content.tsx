import {
  DefaultPalette,
  Stack,
  IStackTokens,
  IStackItemStyles,
  IIconProps,
  Breadcrumb,
  IBreadcrumbItem,
  Label,
  Icon,
} from "@fluentui/react";
import { DefaultButton, IconButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption, IDropdownProps } from '@fluentui/react/lib/Dropdown';

const itemsWithHref: IBreadcrumbItem[] = [
    // Normally each breadcrumb would have a unique href, but to make the navigation less disruptive
    // in the example, it uses the breadcrumb page as the href for all the items
    { text: 'Files', key: 'Files', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 1', key: 'f1', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 2', key: 'f2', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 3', key: 'f3', href: '#/controls/web/breadcrumb' },
    { text: 'Folder 4 (non-clickable)', key: 'f4' },
    { text: 'Folder 5', key: 'f5', href: '#/controls/web/breadcrumb', isCurrentItem: true },
  ];
  const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];
  
  
// Styles definition
const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: "center",
    color: DefaultPalette.white,
    display: "flex",
    height: 50,
    justifyContent: "center",
  },
};
const iconStyles = { marginRight: '8px', marginTop:'15px' };

// Tokens definition
const stackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const addFriendIcon: IIconProps = { iconName: 'AddFriend' };
const emojiIcon: IIconProps = { iconName: 'Emoji2' };


  
  const dropdownStyles = { dropdown: { width: 300 } };
function Content() {
  return (
    <Stack horizontal tokens={stackTokens}>
      <Stack.Item grow={6} styles={stackItemStyles}>
      <Breadcrumb
        items={itemsWithHref}
        maxDisplayedItems={3}
        ariaLabel="Breadcrumb with items rendered as links"
        overflowAriaLabel="More links"
      />
      </Stack.Item>

      <Stack horizontalAlign="center">
      <DefaultButton text="My Requests" iconProps={emojiIcon} onClick={_alertClicked}  />
      </Stack>
  
      <Stack horizontalAlign="end">
      <PrimaryButton text="Primary" iconProps={emojiIcon} onClick={_alertClicked} />
      <Dropdown
        placeholder="Select an option"
        label=""
        options={options}
        styles={dropdownStyles}
      />

      </Stack>
    </Stack>
    
  );
}
export default Content;

function _alertClicked(): void {
    alert('Clicked');
  }

function _onBreadcrumbItemClicked(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
  console.log(`Breadcrumb item with key "${item.key}" has been clicked.`);
}