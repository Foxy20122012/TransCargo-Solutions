'use client';

import presets from "../../../utils/globalPresets";
import { EyeSlashIcon, EyeIcon, KeyIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result.error) {
      console.error("Error de inicio de sesión:", result.error);
    } else {
      window.location.href = "/"; // Redirige al usuario a la ruta raíz después del inicio de sesión exitoso
    }
  };

  return (
    <>
      <div className="flex flex-wrap w-screen h-screen overflow-x-hidden bg-gray-200">
        <div className="flex flex-shrink w-full h-full md:w-1/2 lg:w-1/3 bg-white">
          <div className="rounded-lg w-full border-[#E9ECEF] border">
            <div className="flex w-full p-4 justify-center overflow-hidden">
              <div className="h-64 w-64 flex justify-center items-center shrink-0">
                <Image
                  src={presets.images.logo}
                  alt="logo"
                  className="w-52 h-52 border rounded-xl bg-slate-400 bg-center bg-auto bg-no-repeat object-contain"
                  width={50}
                  height={50}
                />
              </div>
            </div>
            <div className="align-center flex w-full px-8 py-4">
              <div className="flex w-full flex-col space-y-4">
                <div className="flex w-full flex-col space-y-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600 select-none">
                        Usuario
                        <div className="inline-flex text-sm font-medium text-red-400">
                          {" "}
                          (*)
                        </div>
                      </label>
                      <div className="relative flex h-9 justify-between">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          {...register("email", { required: true })}
                          className="w-full p-2 border-y border-l focus:border-gray-400 outline-none rounded-l-lg focus:border-r-none"
                          placeholder="example@email.com"
                        />
                        <div className="bg-cyan-600 hover:bg-cyan-700 text-white flex justify-center items-center p-2 rounded-r-lg cursor-pointer">
                          <UserIcon className="h-5 w-5" />
                        </div>
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          El campo Usuario es requerido.
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600 select-none">
                        Clave
                        <div className="inline-flex text-sm font-medium text-red-400">
                          {" "}
                          (*)
                        </div>
                      </label>
                      <div className="relative flex h-9 justify-between">
                        <input
                          type={passwordShown ? "text" : "password"}
                          id="password"
                          name="password"
                          {...register("password", { required: true })}
                          className="w-full p-2 border-y border-l focus:border-gray-400 outline-none rounded-l-lg focus:border-r-none"
                        />
                        <div
                          className="bg-cyan-600 hover:bg-cyan-700 text-white flex justify-center items-center p-2 rounded-r-lg cursor-pointer"
                          onClick={() => {
                            setPasswordShown(!passwordShown);
                          }}
                        >
                          {!passwordShown ? (
                            <EyeSlashIcon className="h-5 w-5" />
                          ) : (
                            <EyeIcon className="h-5 w-5" />
                          )}
                        </div>
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          El campo Clave es requerido.
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <button
                        type="submit"
                        className={`inline-flex w-full justify-center items-center h-9 px-2 m-1 text-white ease-linear transition-colors duration-150 rounded-md border ${
                          isValid
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-red-300 cursor-not-allowed"
                        }`}
                        disabled={!isValid}
                      >
                        <KeyIcon className="h-5 w-5 pr-2" />
                        Iniciar Sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hidden flex-shrink h-full md:w-1/2 lg:w-2/3 md:flex bg-center bg-contain"
          style={{
            backgroundImage: `url(${presets.images.loginFondo})`,
            minHeight: "75vh",
            backgroundSize: "cover",
          }}
        />
{/* <Image 
    src="https://img.freepik.com/vector-premium/logo-perfecto-empresa-relacionada-industria-transporte-carga_225174-92.jpg"
    width={300}   // Estableciendo el ancho en 300 píxeles como un valor numérico
    height={200}  // Estableciendo la altura en 200 píxeles como un valor numérico
    alt="Descripción de la imagen"  // Asegúrate de proporcionar un texto alternativo para la accesibilidad
/> */}


      </div>
    </>
  );
};

export default RegisterForm;
