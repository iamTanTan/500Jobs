import { Dropdown } from 'flowbite-react';

export const navDropdown = () => (
  <Dropdown label='Dropdown button' gradientDuoTone='pinkToOrange'>
    <Dropdown.Header>
      <span className='block text-sm'>Bonnie Green</span>
      <span className='block truncate text-sm font-medium'>bonnie@flowbite.com</span>
    </Dropdown.Header>
    <Dropdown.Item>Dashboard</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Earnings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
);

export default navDropdown;
