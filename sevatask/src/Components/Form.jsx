import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export function Form() {
  return (
    <Card color="transparent" shadow={false} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <Typography variant="h4" color="blue-gray" className="text-center">
        Register
      </Typography>
      <Typography color="gray" className="mt-1 mb-6 text-center text-sm">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="space-y-4">
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            Full Name
          </Typography>
          <Input
            size="lg"
            placeholder="John Doe"
            className="input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            Phone Number
          </Typography>
          <Input
            size="lg"
            placeholder="123-456-7890"
            className="input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            Date of Birth
          </Typography>
          <Input
            type="date"
            size="lg"
            className="input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            Address
          </Typography>
          <Input
            size="lg"
            placeholder="123 Main St, City, Country"
            className="input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            Reference Name
          </Typography>
          <Input
            size="lg"
            placeholder="Jane Doe"
            className="input"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            User Type
          </Typography>
          <select
            className="input"
            defaultValue=""
          >
            <option value="" disabled>
              Select User Type
            </option>
            <option value="KK">KK</option>
            <option value="Yuvak">Yuvak</option>
          </select>
        </div>
        <div className="flex flex-col">
          <Typography variant="h6" color="blue-gray">
            User Designation
          </Typography>
          <select
            className="input"
            defaultValue=""
          >
            <option value="" disabled>
              Select User Designation
            </option>
            <option value="Student">Student</option>
            <option value="Working Prof">Working Prof</option>
          </select>
        </div>

        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5 mt-4" }}
        />
        <Button className="mt-6" fullWidth>
          Sign Up
        </Button>
      </form>
    </Card>
  );
}
