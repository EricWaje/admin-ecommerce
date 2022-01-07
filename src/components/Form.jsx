import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    NumberIncrementStepper,
    NumberDecrementStepper,
    NumberInputStepper,
    Slider,
    Flex,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Button,
} from '@chakra-ui/react';

const Form = ({ handleSubmit, handleChange, valor, handleValue }) => {
    return (
        <Flex justify="center" mt="10">
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '450px',
                    backgroundColor: 'rgb(103, 212, 255)',
                    borderRadius: '5px',
                    marginBottom: '25px',
                }}
                onSubmit={handleSubmit}
            >
                <Box w="350px" m="3">
                    <FormControl>
                        <FormLabel htmlFor="name" color="white">
                            Name
                        </FormLabel>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            bg="white"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Box>
                <Box w="350px" m="3">
                    <FormControl>
                        <FormLabel htmlFor="price" color="white">
                            Price
                        </FormLabel>
                        <Input
                            type="number"
                            name="price"
                            bg="white"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Box>
                <Box w="350px" m="3">
                    <FormLabel htmlFor="stock" color="white">
                        Stock
                    </FormLabel>
                    <NumberInput
                        type="number"
                        bg="white"
                        maxW="150px"
                        mr="2rem"
                        name="stock"
                        onChange={handleValue}
                        value={valor}
                    >
                        <NumberInputField id="stock" />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Slider
                        flex="1"
                        focusThumbOnChange={false}
                        value={valor}
                        onChange={handleValue}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb
                            fontSize="sm"
                            boxSize="30px"
                            children={valor}
                        />
                    </Slider>
                </Box>
                <Box w="350px" m="3">
                    <FormControl>
                        <FormLabel htmlFor="img" color="white">
                            Img
                        </FormLabel>
                        <Input
                            id="img"
                            type="text"
                            name="img"
                            bg="white"
                            onChange={handleChange}
                        />
                    </FormControl>
                </Box>
                <Button
                    mb="2"
                    bg="white"
                    color="rgb(103, 212, 255)"
                    variant="outline"
                    type="submit"
                >
                    Create
                </Button>
            </form>
        </Flex>
    );
};

export default Form;

{
    /* 
<div>
            <form onSubmit={handleSubmit}>
               <input
                    type="text"
                    placeholder="Product Name"
                    onChange={handleChange}
                    name="name"
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    onChange={handleChange}
                    name="price"
                />
                <input
                    type="number"
                    placeholder="Product Stock"
                    onChange={handleChange}
                    name="stock"
                />
                <input
                    type="text"
                    placeholder="Img string"
                    onChange={handleChange}
                    name="img"
                />
                <div style={{ display: 'flex' }}>
                    <button>Submit</button>
                </div> 
            </form>
        </div>
        */
}
