require "./lib/challenge_1"

RSpec.describe "challenge 1" do
  it "handles empty string" do
    expect(challenge_1 "").to eq("")
  end

  it "handles 123" do
    expect(challenge_1 "123").to eq("000")
  end

  it "handles 4" do
    expect(challenge_1 "4").to eq("0")
  end

  it "handles 5" do
    expect(challenge_1 "5").to eq("1")
  end

  it "handles 6" do
    expect(challenge_1 "6").to eq("1")
  end

  it "handles 789" do
    expect(challenge_1 "789").to eq("111")
  end

  it "handles 0123456789" do
    expect(challenge_1 "0123456789").to eq("0000011111")
  end

  it "handles 995511" do
    expect(challenge_1 "995511").to eq("111100")
  end
end
