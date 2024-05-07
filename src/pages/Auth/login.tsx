import { useForm } from "react-hook-form";
import Input from "../../components/ui/Input";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { EMAIL_REGEX } from "../../utils/interfaces";
import { FcGoogle } from "react-icons/fc";

interface IProps {
  email: string;
  password: string;
}

export default function Login() {
  const { loginQuery, loginGoogleQuery } = useUser();

  const navigate = useNavigate();

  //To do Handle isSubmitting formState
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    setError,
  } = useForm<IProps>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const googleLogin = () => {
    loginGoogleQuery.mutate(undefined, {
      onSuccess: () => {
        navigate("/admin_dashboard", { replace: true });
      },
      onError: (err) => {
        if (String(err).indexOf("wrong-password")) {
          setError(
            "password",
            {
              message:
                "An unexpected error occurred. Please try loggin in again.",
            },
            { shouldFocus: true }
          );
        }
      },
    });
  };

  const submit = (data: IProps) => {
    const { email, password } = data;

    loginQuery.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate("/admin_dashboard");
        },
        onError: (err) => {
          if (String(err).includes("wrong-password")) {
            setError(
              "password",
              { message: "Username or password did not match." },
              { shouldFocus: true }
            );
          } else if (String(err).includes("auth/too-many-requests")) {
            setError(
              "password",
              {
                message:
                  "Your account has been temporarily disabled due to many failed login attempts.",
              },
              { shouldFocus: true }
            );
          }
        },
      }
    );
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
      <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        {loginQuery.isPending && <h1>loading</h1>}
        <div className="flex items-center justify-center">
          <div className="flex h-full w-1/2 md:w-full grow flex-col items-center justify-center">
            <div className="mb-14 flex-col items-center text-center">
              <h2 className="mb-2 text-3xl font-bold font-HeadingFont">
                Please enter your detail.
              </h2>
            </div>
            <div className="flex w-full flex-col items-center">
              <form
                className="flex w-full max-w-sm flex-col"
                onSubmit={handleSubmit((data) => submit(data))}
              >
                <Input
                  {...register("email", {
                    required: "Please provide an email",
                    pattern: {
                      value: EMAIL_REGEX,
                      message:
                        "Please providew a properly formatted email address",
                    },
                  })}
                  error={errors.email?.message}
                  ariaInvalid={isDirty}
                  labelText="Email"
                  type="email"
                  className="mb-3"
                  autofocus
                  autocomplete="on"
                />

                <Input
                  {...register("password", {
                    required: "Please provide a password",
                    minLength: {
                      value: 6,
                      message:
                        "Password needs to be between 6 to 20 characters",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "Password needs to be between 6 to 20 characters",
                    },
                  })}
                  error={errors.password?.message}
                  ariaInvalid={isDirty}
                  labelText="Password"
                  type="password"
                  className="mb-10"
                  autocomplete="off"
                />

                <button
                  type="submit"
                  className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={googleLogin}
                  className="my-5 w-full flex justify-center bg-red-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
                >
                  <FcGoogle className="mr-2 text-2xl" />
                  Login with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
