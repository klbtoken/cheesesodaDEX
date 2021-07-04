import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,body{
  background: #1f0b3e;
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
  background: #2d105a;
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
  background-color: #ff5252;
  opacity: 0.75;
}
.ant-slider-track,
.ant-slider ant-slider-track:hover {
  background-color: #ff5252;
  opacity: 0.75;
}
.ant-slider-dot-active,
.ant-slider-handle,
.ant-slider-handle-click-focused,
.ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open)  {
  border: 2px solid #ff5252; 
}
.ant-table-tbody > tr.ant-table-row:hover > td {
  background: #3b1477 !important;
}
.ant-table-tbody > tr > td {
  border-bottom: 8px solid #280e4f;
}
.ant-table-container table > thead > tr:first-child th {
  border-bottom: none;
}
.ant-divider-horizontal.ant-divider-with-text::before, .ant-divider-horizontal.ant-divider-with-text::after {
  border-top: 1px solid #ff8e44 !important;
}
.ant-layout {
    background: #1f0b3e
  }
  .ant-table {
    background: #35126a;
  }
  .ant-table-thead > tr > th {
    background: #280e4f;
  }
.ant-select-item-option-content {
  img {
    margin-right: 4px;
  }
}
.ant-modal-content {
  background-color: #35126a;
}

@-webkit-keyframes highlight {
  from { background-color: #ff5252;}
  to {background-color: #280e4f;}
}
@-moz-keyframes highlight {
  from { background-color: #ff5252;}
  to {background-color: #280e4f;}
}
@-keyframes highlight {
  from { background-color: #ff5252;}
  to {background-color: #280e4f;}
}
.flash {
  -moz-animation: highlight 0.5s ease 0s 1 alternate ;
  -webkit-animation: highlight 0.5s ease 0s 1 alternate;
  animation: highlight 0.5s ease 0s 1 alternate;
}
.ant-select-item-option-active:not(.ant-select-item-option-disabled),th.ant-table-column-sort{
	background-color:#401681 !important;
}
.ant-table-tbody>tr.ant-table-placeholder:hover>td,.ant-table-thead th.ant-table-column-has-sorters:hover{
	background-color:#3b1477 !important;
}
.ant-select-item-option-selected:not(.ant-select-item-option-disabled){
	background-color:#3b1477 !important;
}`;
