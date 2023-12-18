require "./lib/challenge_2"

RSpec.describe "challenge 2" do
  it "handles two element array" do
    expect(challenge_2 [10, 1]).to eq(9)
  end

  it "handles input with more elements" do
    expect(challenge_2 [4, 3, 2, 10, 1]).to eq(9)
  end

  it "handles input with negative values" do
    expect(challenge_2 [4, 3, 2, 10, -1]).to eq(1)
  end

  it "handles input with duplicate values" do
    expect(challenge_2 [1, 4, 3, 2, 2, 2, 2, 2, 2, 10]).to eq(9)
  end
end
