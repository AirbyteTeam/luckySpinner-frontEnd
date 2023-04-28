import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react'
import * as PropTypes from "prop-types";
function Routes(props) {
    return null;
}

Routes.propTypes = {children: PropTypes.node};

function AddCode() {

    const [discountCodes, setDiscountCodes] = useState(
        [
            {
                id: 69,
                companyName: 'میگ میگ',
                productName: 'آیفون 14',
                discountCode: 'MIGMIG50',
                discountCount: '69',
                companyWebsite: 'www.migmig.co',
                companyTelephoneNumber: '0219996996',
                companyAddress: 'تهران',
            },
            {
                id: 70,
                companyName: 'دیجیکالا',
                productName: 'پاور بانک',
                discountCode: 'MIGMIG50',
                discountCount: '69',
                companyWebsite: 'www.migmig.co',
                companyTelephoneNumber: '0219996996',
                companyAddress: 'تهران',
            },
            {
                id: 71,
                companyName: 'علی بابا',
                productName: 'تور تایلند',
                discountCode: 'MIGMIG50',
                discountCount: '69',
                companyWebsite: 'www.migmig.co',
                companyTelephoneNumber: '0219996996',
                companyAddress: 'تهران',
            },
            {
                id: 72,
                companyName: 'اسنپ',
                productName: 'سفر رایگان',
                discountCode: 'MIGMIG50',
                discountCount: '69',
                companyWebsite: 'www.migmig.co',
                companyTelephoneNumber: '0219996996',
                companyAddress: 'تهران',
            },
        ]
    )

    const [newDiscountCode, setNewDiscountCode] = useState({
        companyName: '',
        productName: '',
        discountCode: '',
        discountCount: '',
        companyWebsite: '',
        companyTelephoneNumber: '',
        companyAddress: '',
    })

    const [isOpenAddCode, setIsOpenAddCode] = useState(false)
    const [isOpenDeleteCode, setIsOpenDeleteCode] = useState(false)
    const [isOpenEditCode, setIsOpenEditCode] = useState(false)
    const [targetIdDeleteCode, setTargetIdDeleteCode] = useState('')
    const [targetEditCode, setTargetEditCode] = useState('')

    function closeModalAddCode() {
        setIsOpenAddCode(false)
    }

    function openModalAddCode() {
        setIsOpenAddCode(true)
    }

    function closeModalDeleteCode() {
        setIsOpenDeleteCode(false)
    }

    function openModalDeleteCode(id) {
        setIsOpenDeleteCode(true)
        setTargetIdDeleteCode(id)
    }

    function closeModalEditCode() {
        setIsOpenEditCode(false)
    }

    function openModalEditCode(code) {
        setTargetEditCode(code)
        setIsOpenEditCode(true)
    }

    const onChangeInputAddCode = (e) => {
        setNewDiscountCode({
            ...newDiscountCode,
            [e.target.name]: e.target.value
        })
    }

    const onChangeInputEditCode = (e) => {
        setTargetEditCode({
            ...targetEditCode,
            [e.target.name]: e.target.value
        })
    }

    function addDiscountCode() {
        console.log(newDiscountCode)
        setIsOpenAddCode(true)
    }

    function  handleDeleteCode() {
        console.log(targetIdDeleteCode)
        setIsOpenDeleteCode(false)
    }

    function  handleEditCode() {
        console.log(targetEditCode)
        setIsOpenEditCode(false)
    }

    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 text-right h-screen p-8 font-graphik" dir='rtl'>
                <div className="container ">
                    <div className="flex flex-row justify-between items-center my-4">
                        <div className="flex flex-row items-center text-lg font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z"/>
                            </svg>
                            <span className='mr-2'>کد تخفیف ها</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                type="button"
                                onClick={openModalAddCode}
                                className="flex flex-row items-center rounded-md bg-lime-400 p-2 text-sm font-medium text-white hover:bg-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="text-black w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                                <span className="text-black">افزودن کد تخفیف</span>
                            </button>
                        </div>
                        <Transition appear show={isOpenAddCode} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModalAddCode}>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                                </Transition.Child>

                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Dialog.Panel
                                                className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg text-center font-bold leading-6 text-black"
                                                >
                                                    افزودن کد تخفیف
                                                </Dialog.Title>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" dir='rtl'>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            نام شرکت
                                                        </label>
                                                        <input
                                                            type="text" name='companyName'
                                                            value={addDiscountCode.companyName} onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            نام محصول
                                                        </label>
                                                        <input
                                                            type="text" name='productName'
                                                            value={addDiscountCode.productName} onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            کد تخفیف
                                                        </label>
                                                        <input
                                                            type="text" name='discountCode'
                                                            value={addDiscountCode.discountCode}
                                                            onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            تعداد
                                                        </label>
                                                        <input
                                                            type="number" name='discountCount'
                                                            value={addDiscountCode.discountCount}
                                                            onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            شماره تلفن
                                                        </label>
                                                        <input
                                                            type="number" name='companyTelephoneNumber'
                                                            value={addDiscountCode.companyTelephoneNumber}
                                                            onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            وب سایت
                                                        </label>
                                                        <input
                                                            type="text" name='companyWebsite'
                                                            value={addDiscountCode.companyWebsite}
                                                            onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label
                                                            className="block mb-2 text-sm font-medium text-black dark:text-white">
                                                            آدرس
                                                        </label>
                                                        <input
                                                            type="text" name='companyAddress'
                                                            value={addDiscountCode.companyAddress}
                                                            onChange={onChangeInputAddCode}
                                                            className="block text-right w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                </div>

                                                <div className="flex flex-row items-center justify-center w-full mt-4"
                                                     dir='rtl'>
                                                    <button
                                                        type="button"
                                                        className="ml-4 inline-flex justify-center rounded-md bg-lime-100 text-lime-600 hover:bg-lime-600 hover:text-lime-100 px-4 py-2 text-sm font-medium text-blue-900"
                                                        onClick={addDiscountCode}
                                                    >
                                                        ثبت
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="inline-flex justify-center rounded-md bg-gray-300 text-gray-600 hover:bg-gray-600 hover:text-gray-100 px-4 py-2 text-sm font-medium text-blue-900"
                                                        onClick={closeModalAddCode}
                                                    >
                                                        بستن
                                                    </button>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </div>
                            </Dialog>
                        </Transition>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="table w-full bg-white rounded-lg shadow-sm overflow-hidden text-center">
                            <div className="table-header-group bg-gray-200 font-medium">
                                <div className="table-row">
                                    <div className="table-cell p-4">نام شرکت</div>
                                    <div className="table-cell p-4">نام محصول</div>
                                    <div className="table-cell p-4">کد تخفیف</div>
                                    <div className="table-cell p-4">تعداد</div>
                                    <div className="table-cell p-4">وب سایت</div>
                                    <div className="table-cell p-4">شماره تلفن</div>
                                    <div className="table-cell p-4">آدرس</div>
                                    <div className="table-cell p-4">عملیات</div>
                                </div>
                            </div>
                            <div className="table-row-group p-4">
                                {
                                    discountCodes.map((code, index) => (
                                        <div className="table-row hover:bg-gray-100 transition" key={index}>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.companyName}</div>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.productName}</div>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.discountCode}</div>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.discountCount}</div>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.companyWebsite}</div>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.companyTelephoneNumber}</div>
                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">{code.companyAddress}</div>

                                            <div
                                                className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">

                                                <div className="flex flex-row justify-center items-center">
                                                    <button type="button"
                                                            onClick={e => openModalDeleteCode(code.id)}
                                                            className='flex flex-row items-center ml-2 bg-rose-600 hover:bg-rose-700 text-sm font-medium text-white px-2 py-1 rounded transition'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                             className="w-4 h-4 ml-1">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                                                        </svg>

                                                        <span>حذف</span>
                                                    </button>
                                                    <Transition appear show={isOpenDeleteCode} as={Fragment}>
                                                        <Dialog as="div" className="relative z-10"
                                                                onClose={closeModalDeleteCode}>
                                                            <Transition.Child
                                                                as={Fragment}
                                                                enter="ease-out duration-300"
                                                                enterFrom="opacity-0"
                                                                enterTo="opacity-100"
                                                                leave="ease-in duration-200"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                                                            </Transition.Child>

                                                            <div className="fixed inset-0 overflow-y-auto">
                                                                <div
                                                                    className="flex min-h-full items-center justify-center p-4 text-center">
                                                                    <Transition.Child
                                                                        as={Fragment}
                                                                        enter="ease-out duration-300"
                                                                        enterFrom="opacity-0 scale-95"
                                                                        enterTo="opacity-100 scale-100"
                                                                        leave="ease-in duration-200"
                                                                        leaveFrom="opacity-100 scale-100"
                                                                        leaveTo="opacity-0 scale-95"
                                                                    >
                                                                        <Dialog.Panel
                                                                            className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                                            <Dialog.Title
                                                                                as="h3"
                                                                                className="text-lg text-center font-bold leading-6 text-gray-900"
                                                                            >
                                                                                حذف کد تخفیف
                                                                            </Dialog.Title>
                                                                            <div className="mt-4 text-center" dir='rtl'>
                                                                                <span className='font-medium text-center'>
                                                                                    آیا از حذف کد تخفیف مطمئن هستید؟
                                                                                </span>

                                                                            </div>

                                                                            <div
                                                                                className="flex flex-row items-center justify-center w-full mt-4"
                                                                                dir='rtl'>
                                                                                <button
                                                                                    type="button"
                                                                                    className="ml-4 inline-flex justify-center rounded-md bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 text-sm font-medium text-blue-900"
                                                                                    onClick={handleDeleteCode}
                                                                                >
                                                                                    حذف
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="inline-flex justify-center rounded-md bg-gray-300 text-gray-600 hover:bg-gray-600 hover:text-gray-100 px-4 py-2 text-sm font-medium text-blue-900"
                                                                                    onClick={closeModalDeleteCode}
                                                                                >
                                                                                    بستن
                                                                                </button>
                                                                            </div>
                                                                        </Dialog.Panel>
                                                                    </Transition.Child>
                                                                </div>
                                                            </div>
                                                        </Dialog>
                                                    </Transition>


                                                    <button type="button" onClick={e => openModalEditCode(code)}
                                                        className='flex flex-row items-center bg-yellow-400 hover:bg-yellow-500 text-sm font-medium text-slate-900 px-2 py-1 rounded transition'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                             className="w-4 h-4 ml-1">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                                        </svg>
                                                        <span>ویرایش</span>
                                                    </button>
                                                    <Transition appear show={isOpenEditCode} as={Fragment}>
                                                        <Dialog as="div" className="relative z-10"
                                                                onClose={closeModalEditCode}>
                                                            <Transition.Child
                                                                as={Fragment}
                                                                enter="ease-out duration-300"
                                                                enterFrom="opacity-0"
                                                                enterTo="opacity-100"
                                                                leave="ease-in duration-200"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <div className="fixed inset-0 bg-black bg-opacity-25"/>
                                                            </Transition.Child>

                                                            <div className="fixed inset-0 overflow-y-auto">
                                                                <div
                                                                    className="flex min-h-full items-center justify-center p-4 text-center">
                                                                    <Transition.Child
                                                                        as={Fragment}
                                                                        enter="ease-out duration-300"
                                                                        enterFrom="opacity-0 scale-95"
                                                                        enterTo="opacity-100 scale-100"
                                                                        leave="ease-in duration-200"
                                                                        leaveFrom="opacity-100 scale-100"
                                                                        leaveTo="opacity-0 scale-95"
                                                                    >
                                                                        <Dialog.Panel
                                                                            className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                                            <Dialog.Title
                                                                                as="h3"
                                                                                className="text-lg text-center font-bold leading-6 text-gray-900"
                                                                            >
                                                                                ویرایش کد تخفیف
                                                                            </Dialog.Title>
                                                                            <div
                                                                                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                                                                                dir='rtl'>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        نام شرکت
                                                                                    </label>
                                                                                    <input
                                                                                        type="text" name='companyName'
                                                                                        value={targetEditCode.companyName}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        نام محصول
                                                                                    </label>
                                                                                    <input
                                                                                        type="text" name='productName'
                                                                                        value={targetEditCode.productName}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        کد تخفیف
                                                                                    </label>
                                                                                    <input
                                                                                        type="text" name='discountCode'
                                                                                        value={targetEditCode.discountCode}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        تعداد
                                                                                    </label>
                                                                                    <input
                                                                                        type="number"
                                                                                        name='discountCount'
                                                                                        value={targetEditCode.discountCount}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        شماره تلفن
                                                                                    </label>
                                                                                    <input
                                                                                        type="number"
                                                                                        name='companyTelephoneNumber'
                                                                                        value={targetEditCode.companyTelephoneNumber}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        وب سایت
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        name='companyWebsite'
                                                                                        value={targetEditCode.companyWebsite}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                                <div className='text-right'>
                                                                                    <label
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                                        آدرس
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        name='companyAddress'
                                                                                        value={targetEditCode.companyAddress}
                                                                                        onChange={onChangeInputEditCode}
                                                                                        className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                                                </div>

                                                                            </div>

                                                                            <div
                                                                                className="flex flex-row items-center justify-center w-full mt-4"
                                                                                dir='rtl'>
                                                                                <button
                                                                                    type="button"
                                                                                    className="ml-4 inline-flex justify-center rounded-md bg-lime-100 text-lime-600 hover:bg-lime-600 hover:text-lime-100 px-4 py-2 text-sm font-medium text-blue-900"
                                                                                    onClick={handleEditCode}
                                                                                >
                                                                                    ثبت
                                                                                </button>
                                                                                <button
                                                                                    type="button"
                                                                                    className="inline-flex justify-center rounded-md bg-gray-300 text-gray-600 hover:bg-gray-600 hover:text-gray-100 px-4 py-2 text-sm font-medium text-blue-900"
                                                                                    onClick={closeModalEditCode}
                                                                                >
                                                                                    بستن
                                                                                </button>
                                                                            </div>
                                                                        </Dialog.Panel>
                                                                    </Transition.Child>
                                                                </div>
                                                            </div>
                                                        </Dialog>
                                                    </Transition>
                                                </div>


                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCode;
