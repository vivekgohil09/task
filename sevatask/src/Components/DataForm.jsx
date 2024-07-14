import React, { useState } from "react";
import Select from "react-select";
import {
  Card,
  Button,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

const KKOptions = [
  { value: "kk1", label: "KK 1" },
  { value: "kk2", label: "KK 2" },
  { value: "kk3", label: "KK 3" },
  // Add more KK options as needed
];

const YuvakOptions = [
  { value: "yuvak1", label: "Yuvak 1" },
  { value: "yuvak2", label: "Yuvak 2" },
  { value: "yuvak3", label: "Yuvak 3" },
  // Add more Yuvak options as needed
];

const placeOptions = [
  { value: "home", label: "Home" },
  { value: "outside", label: "Outside" },
];

const timeSpentOptions = [
  { value: "30m", label: "30 minutes" },
  { value: "1hr", label: "1 hour" },
  { value: "1.5hr", label: "1.5 hours" },
  { value: "2hr", label: "2 hours" },
];

export function DataForm() {
  const [sevaDate, setSevaDate] = useState("");
  const [selectedKK, setSelectedKK] = useState([]);
  const [selectedYuvak, setSelectedYuvak] = useState([]);
  const [isNewUser, setIsNewUser] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [refName, setRefName] = useState("");
  const [userDesignation, setUserDesignation] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [timeSpent, setTimeSpent] = useState(null);
  const [comments, setComments] = useState("");

  const handleKKChange = (selectedOptions) => {
    setSelectedKK(selectedOptions);
  };

  const handleYuvakChange = (selectedOptions) => {
    setSelectedYuvak(selectedOptions);
  };

  const handlePlaceChange = (selectedOption) => {
    setSelectedPlace(selectedOption);
  };

  const handleTimeSpentChange = (selectedOption) => {
    setTimeSpent(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      sevaDate,
      selectedKK,
      selectedYuvak,
      isNewUser,
      newUserName,
      refName,
      userDesignation,
      selectedPlace,
      timeSpent,
      comments,
    });
    // Add your form submission logic (e.g., API call) here
  };

  return (
    <Card color="transparent" shadow={false} className="mb-5 md:w-[50%]">
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-xl font-bold mb-4"
      >
        Data Feeder Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Seva Date
          </label>
          <Input
            type="date"
            size="lg"
            value={sevaDate}
            onChange={(e) => setSevaDate(e.target.value)}
            className="input"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            KK Name (Multi-select)
          </label>
          <Select
            isMulti
            options={KKOptions}
            value={selectedKK}
            onChange={handleKKChange}
            className="select"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Yuvak Name (Multi-select)
          </label>
          <Select
            isMulti
            options={YuvakOptions}
            value={selectedYuvak}
            onChange={handleYuvakChange}
            className="select"
          />

          <div className="flex items-center">
            <Checkbox
              checked={isNewUser}
              onChange={(e) => setIsNewUser(e.target.checked)}
              label="New User?"
              containerProps={{ className: "checkbox-container mr-2" }}
            />
            <span className="text-gray-700 text-sm">New User?</span>
          </div>

          {isNewUser && (
            <>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                New User Details
              </label>
              <Input
                size="lg"
                placeholder="New User Name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                className="input"
              />
              <Input
                size="lg"
                placeholder="Referral Name"
                value={refName}
                onChange={(e) => setRefName(e.target.value)}
                className="input"
              />
              <Input
                size="lg"
                placeholder="User Designation"
                value={userDesignation}
                onChange={(e) => setUserDesignation(e.target.value)}
                className="input"
              />
            </>
          )}

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Place
          </label>
          <Select
            options={placeOptions}
            value={selectedPlace}
            onChange={handlePlaceChange}
            className="select"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Total Time Spent
          </label>
          <Select
            options={timeSpentOptions}
            value={timeSpent}
            onChange={handleTimeSpentChange}
            className="select"
          />

          <label className="block text-gray-700 text-sm font-bold mb-2">
            Comments
          </label>
          <Input
            size="lg"
            placeholder="Add comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="input"
          />

          <Button type="submit" className="btn-primary mt-4" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
}
