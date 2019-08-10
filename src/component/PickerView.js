import Picker from 'react-native-picker';

const PickerView = (data, startValue, job) =>{
    Picker.init({
        pickerData: data,
        selectedValue: [startValue],
        onPickerConfirm: data => {
            job(data);
        },
        onPickerSelect: data => {
            job(data);
        }
    });
    Picker.show();
}

export {
    PickerView
}