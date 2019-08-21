import Picker from 'react-native-picker';

const PickerView = (data, startValue, job, pickerTitleText) =>{
    Picker.init({
        pickerData: data,
        pickerTitleText: pickerTitleText,
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

const PickerViewHide = () => {
    Picker.hide();
}

export {
    PickerView, PickerViewHide
}