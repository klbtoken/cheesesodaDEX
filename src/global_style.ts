import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #000000;
}
input[type=number]::-webkit-inner-spin-button {
  opacity: 0;
}
input[type=number]:hover::-webkit-inner-spin-button,
input[type=number]:focus::-webkit-inner-spin-button {
  opacity: 0.25;
}
/* width */
::-webkit-scrollbar {
  width: 15px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #111111;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #5b5f67;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #5b5f67;
}
.ant-slider-track, .ant-slider:hover .ant-slider-track {
  background-color: #03e1ff;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #03e1ff;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #03e1ff; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #454248 !important;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #1c1c1c;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #00ffa3 !important;
}
.ant-layout {
    background: #000000;
  }
  .ant-table {
    background: #323034;
  }
  .ant-table-thead > tr > th {
    background: #1c1c1c;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #323034;
}

@-webkit-keyframes highlight {
  from { background-color: #03e1ff;}
  to {background-color: #1c1c1c;}
}
@-moz-keyframes highlight {
  from { background-color: #03e1ff;}
  to {background-color: #1c1c1c;}
}
@-keyframes highlight {
  from { background-color: #03e1ff;}
  to {background-color: #1c1c1c;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled),th.ant-table-column-sort{
	background-color:#625f66 !important;
}
.ant-table-tbody>tr.ant-table-placeholder:hover>td,.ant-table-thead th.ant-table-column-has-sorters:hover{
	background-color:#454248 !important;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled){
	background-color:#454248 !important;
}`;
