import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react'

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
                companyName: 'میگ میگ',
                productName: 'آیفون 14',
                discountCode: 'MIGMIG50',
                discountCount: '69',
                companyWebsite: 'www.migmig.co',
                companyTelephoneNumber: '0219996996',
                companyAddress: 'تهران',
            },
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
                id: 69,
                companyName: 'میگ میگ',
                productName: 'آیفون 14',
                discountCode: 'MIGMIG50',
                discountCount: '69',
                companyWebsite: 'www.migmig.co',
                companyTelephoneNumber: '0219996996',
                companyAddress: 'تهران',
            }
        ]
    )

    const [newDiscountCode,setNewDiscountCode] = useState({
        companyName: '',
        productName: '',
        discountCode: '',
        discountCount: '',
        companyWebsite: '',
        companyTelephoneNumber: '',
        companyAddress: '',
    })

    const [isOpenAddCode, setIsOpenAddCode] = useState(false)

    function closeModal() {
        setIsOpenAddCode(false)
    }

    function openModal() {
        setIsOpenAddCode(true)
    }

    const onChangeInput  = (e) => {
        setNewDiscountCode({
            ...newDiscountCode,
            [e.target.name]: e.target.value
        })
    }

    function addDiscountCode() {
        console.log(newDiscountCode)
        setIsOpenAddCode(true)
    }

    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 text-right h-full p-8 font-graphik" dir='rtl'>
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
                                onClick={openModal}
                                className="flex flex-row items-center rounded-md bg-lime-400 p-2 text-sm font-medium text-white hover:bg-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                </svg>
                                <span>افزودن کد تخفیف</span>
                            </button>
                        </div>
                        <Transition appear show={isOpenAddCode} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                                    className="text-lg text-center font-bold leading-6 text-gray-900"
                                                >
                                                    افزودن کد تخفیف
                                                </Dialog.Title>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" dir='rtl'>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            نام شرکت
                                                        </label>
                                                        <input
                                                            type="text" name='companyName' value={addDiscountCode.companyName} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            نام محصول
                                                        </label>
                                                        <input
                                                            type="text" name='productName' value={addDiscountCode.productName} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            کد تخفیف
                                                        </label>
                                                        <input
                                                            type="text" name='discountCode' value={addDiscountCode.discountCode} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            تعداد
                                                        </label>
                                                        <input
                                                            type="number" name='discountCount' value={addDiscountCode.discountCount} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            شماره تلفن
                                                        </label>
                                                        <input
                                                            type="number" name='companyTelephoneNumber' value={addDiscountCode.companyTelephoneNumber} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            وب سایت
                                                        </label>
                                                        <input
                                                            type="text" name='companyWebsite' value={addDiscountCode.companyWebsite} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
                                                    </div>

                                                    <div className='text-right'>
                                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            آدرس
                                                        </label>
                                                        <input
                                                            type="text" name='companyAddress' value={addDiscountCode.companyAddress} onChange={onChangeInput}
                                                            className="block text-right w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs outline-0	"/>
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
                                                        onClick={closeModal}
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
                                        <div className="table-row hover:bg-gray-100 transition">
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
                                            <div className="table-cell border-b-2 border-slate-100 border-solid px-2 py-3">
                                                <button
                                                    className='flex flex-row items-center bg-yellow-400 hover:bg-yellow-500 text-sm font-medium text-slate-900 px-2 py-1 rounded transition'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                         strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"/>
                                                    </svg>
                                                    <span>ویرایش</span>
                                                </button>
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
