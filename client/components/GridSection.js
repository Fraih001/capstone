import React from 'react';
import '../style.css';

export default function GridSection() {
  return (
    <section className=' w-full border-y border-slate-700 bg-slate-900'>
      <div className='mx-auto flex max-w-[1440px] flex-col items-center justify-start gap-8 pb-24 pt-16'>
        <img src='editor-screenshot.png' className='w-10/12' />
        <h2
          className='gradient-text my-8 max-w-[700px] pb-2 text-center text-5xl font-bold leading-normal'
          style={{}}>
          Egestas pretium aenean pharetra magna ac placerat vestibulum!
        </h2>
        <div className='grid w-10/12 grid-cols-3 gap-8 text-[20px] font-light'>
          <div className='h-full w-full rounded-xl bg-slate-800 p-12 shadow-lg'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='3.5'
                stroke='#a3e635'></rect>
              <path
                d='M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z'
                fill='#a3e635'></path>
            </svg>
            <p className='my-4 font-bold'>Pharetra magna ac</p>
            <p className='text-slate-400'>
              Egestas pretium aenean pharetra magna ac placerat vestibulum!
            </p>
          </div>
          <div className='h-full w-full rounded-xl bg-slate-800 p-12 shadow-lg'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='3.5'
                stroke='#a3e635'></rect>
              <path
                d='M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z'
                fill='#a3e635'></path>
            </svg>
            <p className='my-4 font-bold'>Pharetra magna ac</p>
            <p className='text-slate-400'>
              Egestas pretium aenean pharetra magna ac placerat vestibulum!
            </p>
          </div>
          <div className='h-full w-full rounded-xl bg-slate-800 p-12 shadow-lg'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='3.5'
                stroke='#a3e635'></rect>
              <path
                d='M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z'
                fill='#a3e635'></path>
            </svg>
            <p className='my-4 font-bold'>Pharetra magna ac</p>
            <p className='text-slate-400'>
              Egestas pretium aenean pharetra magna ac placerat vestibulum!
            </p>
          </div>
          <div className='h-full w-full rounded-xl bg-slate-800 p-12 shadow-lg'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='3.5'
                stroke='#a3e635'></rect>
              <path
                d='M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z'
                fill='#a3e635'></path>
            </svg>
            <p className='my-4 font-bold'>Pharetra magna ac</p>
            <p className='text-slate-400'>
              Egestas pretium aenean pharetra magna ac placerat vestibulum!
            </p>
          </div>
          <div className='h-full w-full rounded-xl bg-slate-800 p-12 shadow-lg'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='3.5'
                stroke='#a3e635'></rect>
              <path
                d='M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z'
                fill='#a3e635'></path>
            </svg>
            <p className='my-4 font-bold'>Pharetra magna ac</p>
            <p className='text-slate-400'>
              Egestas pretium aenean pharetra magna ac placerat vestibulum!
            </p>
          </div>
          <div className='h-full w-full rounded-xl bg-slate-800 p-12 shadow-lg'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.5'
                y='0.5'
                width='23'
                height='23'
                rx='3.5'
                stroke='#a3e635'></rect>
              <path
                d='M9.44531 16.9801C10.6882 16.9801 11.7124 15.9609 11.7124 14.7031V13.7287H13.0795V14.7031C13.0795 15.9609 14.0938 16.9801 15.3565 16.9801C16.5994 16.9801 17.6186 15.9609 17.6236 14.7031C17.6335 13.4503 16.5994 12.4361 15.3565 12.4361H14.3771V11.0639H15.3565C16.5994 11.0639 17.6186 10.0497 17.6236 8.78693C17.6335 7.53906 16.5994 6.51989 15.3565 6.51989C14.0938 6.51989 13.0795 7.53906 13.0795 8.78693V9.77131H11.7124V8.78693C11.7124 7.53906 10.6882 6.51989 9.44531 6.51989C8.17756 6.51989 7.15838 7.53906 7.16335 8.78693C7.1733 10.0497 8.17756 11.0639 9.44531 11.0639H10.4148V12.4361H9.44531C8.17756 12.4361 7.15838 13.4503 7.16335 14.7031C7.1733 15.9609 8.17756 16.9801 9.44531 16.9801ZM9.44531 9.77131C8.89347 9.77131 8.45597 9.33381 8.46094 8.78693C8.46591 8.25497 8.89347 7.81747 9.44531 7.81747C9.9723 7.81747 10.4148 8.25497 10.4148 8.78693V9.77131H9.44531ZM9.44531 15.6825C8.89347 15.6825 8.45597 15.245 8.46094 14.7031C8.46591 14.1662 8.89347 13.7287 9.44531 13.7287H10.4148V14.7031C10.4098 15.245 9.9723 15.6825 9.44531 15.6825ZM14.3771 9.77131V8.78693C14.3722 8.25497 14.8097 7.81747 15.3565 7.81747C15.8835 7.81747 16.321 8.25497 16.331 8.78693C16.3359 9.33381 15.8835 9.77131 15.3565 9.77131H14.3771ZM15.3565 15.6825C14.8097 15.6825 14.3771 15.245 14.3771 14.7031V13.7287H15.3565C15.8835 13.7287 16.321 14.1662 16.331 14.7031C16.3359 15.245 15.8835 15.6825 15.3565 15.6825ZM11.7124 12.4361V11.0639H13.0795V12.4361H11.7124Z'
                fill='#a3e635'></path>
            </svg>
            <p className='my-4 font-bold'>Pharetra magna ac</p>
            <p className='text-slate-400'>
              Egestas pretium aenean pharetra magna ac placerat vestibulum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}